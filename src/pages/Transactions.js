import Categories from "../components/Categories/Categories";
import {
  DailyExpensesContainer,
  PageContainer,
  TitleContainer,
  TransactionsContainer,
} from "../components/Categories/styled";
import { ExpenseTotal, H4 } from "../components/ExpenseFilter/styled";
import { useCategory } from "../contexts/CategoryContext";

const Transactions = () => {
  const { state: categories } = useCategory();

  const expenses = [];
  categories.reduce(function (res, value) {
    const key = value.payload.text + value.payload.date.toString();

    if (!res[key]) {
      res[key] = {
        id: value.id,
        payload: {
          text: value.payload.text,
          price: 0,
          color: value.payload.color,
          date: value.payload.date,
          coin: '£',
        },
      };
      expenses.push(res[key]);
    }
    res[key].payload.price += value.payload.price;

    return res;
  }, {});

  let totalDaily = 0;
  expenses.forEach((element) => (totalDaily += element.payload.price));

  let obj = {};

  expenses.forEach((element) => {
    if (Object.keys(obj).includes(element.payload.date.toString())) {
      obj[element.payload.date].push(element);
    } else {
      obj[element.payload.date] = [element];
    }
  });

  return (
    <PageContainer>
      <TransactionsContainer>
        <TitleContainer>
        <H4>Daily Expenses</H4>
        <ExpenseTotal>£ {totalDaily}</ExpenseTotal>
        </TitleContainer>
        <DailyExpensesContainer>
          <Categories categoriesObj={obj} categories={expenses} />
        </DailyExpensesContainer>
      </TransactionsContainer>
    </PageContainer>
  );
};

export default Transactions;
