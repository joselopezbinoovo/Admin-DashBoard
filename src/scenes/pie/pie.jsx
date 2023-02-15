import { Box } from "@mui/material";
import PieChart from "../../components/pieChart";
import Header from "../../components/Headers";
const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;