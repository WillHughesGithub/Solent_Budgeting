import { PageContainer } from "../components/Categories/styled";
import ExpenseFilter from "../components/ExpenseFilter";
import { OverviewPageContainer } from "../components/ExpenseFilter/styled";

const Overview = () => {
  return (
    <PageContainer>
      <OverviewPageContainer>
        <ExpenseFilter />
      </OverviewPageContainer>
    </PageContainer>
  );
};

export default Overview;
