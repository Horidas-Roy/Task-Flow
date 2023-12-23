import Banner from "../Banner/Banner";
import CustomizeTemplate from "../CustomizeTemplate/CustomizeTemplate";
import OrganizeSection from "../OrganizeSection/OrganizeSection";
import TodoListBanner from "../TodoListBanner/TodoListBanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TodoListBanner></TodoListBanner>
            <OrganizeSection></OrganizeSection>
            <CustomizeTemplate></CustomizeTemplate>
        </div>
    );
};

export default Home;