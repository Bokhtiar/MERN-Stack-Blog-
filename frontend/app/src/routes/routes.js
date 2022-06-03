import CategroyList from "./Components/Admin/Category/CategoryList";
import CategroyCreate from "./Components/Admin/Category/CategoryCreate";
import MasterLayout from "./Components/Layouts/admin/MasterLayout";

const routes = [
    {path: '/admin/dashboard', exact: true, name:'Admin', component:MasterLayout },
    {path: '/admin/category/list', exact: true, name:'CategroyList', component:CategroyList},
    {path: '/admin/category/create', exact: true, name:'CategroyCreate', component:CategroyCreate}
];
export default routes

