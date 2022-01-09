import { useCategory } from "../../contexts/CategoryContext";
import Categories from "../Categories/Categories";
import {
  DoughnoutContainer,
  DoughnutStyle,
  ExpenseTotal,
  H4,
  OverviewContainerExpenses,
} from "./styled";
import { ExpensesContainer } from "./styled";
import { Chart, ArcElement } from "chart.js";

import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const ExpenseFilter = () => {
  const { state: categories } = useCategory();

  const biggestExpenses2 = [];
  categories.reduce(function (res, value) {
    if (!res[value.payload.text]) {
      res[value.payload.text] = {
        id: value.id,
        payload: {
          text: value.payload.text,
          price: 0,
          color: value.payload.color,
          coin: "£",
        },
      };
      biggestExpenses2.push(res[value.payload.text]);
    }
    res[value.payload.text].payload.price += value.payload.price;
    return res;
  }, {});

  const biggestExpenses = biggestExpenses2
    .sort((a, b) => b.payload.price - a.payload.price)
    .slice(0, 6);

  let total = 0;
  biggestExpenses.forEach((element) => {
    total += element.payload.price;
  });

  const data = {
    datasets: [
      {
        data: biggestExpenses.map((item) => item.payload.price),
        backgroundColor: biggestExpenses.map((item) => item.payload.color),
        borderColor: biggestExpenses.map((item) => item.payload.color),
      },
    ],
    borderWidth: 1,
  };

  return (
    <>
      <DoughnoutContainer>
        <DoughnutStyle>
          <Doughnut data={data} />
        </DoughnutStyle>
      </DoughnoutContainer>
      <H4>Top 6 Expenses</H4>
      <ExpenseTotal>£{total}</ExpenseTotal>
      <OverviewContainerExpenses>
        <ExpensesContainer>
          <Categories categories={biggestExpenses} />
        </ExpensesContainer>
      </OverviewContainerExpenses>
    </>
  );
};

export default ExpenseFilter;
