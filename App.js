import express from 'express';
import helloApp from './Hello.js';
import Lab5 from "./Lab5.js";
import cors from "cors";
import {Calculator, CalculatorQuery} from './Calculator.js';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
const app = express();
app.use(cors());
app.use(express.json());


AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
helloApp(app);
Calculator(app);
CalculatorQuery(app);

app.listen(process.env.PORT || 4000);