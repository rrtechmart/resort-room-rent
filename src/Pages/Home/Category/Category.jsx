import Container from "../../../component/Shared/Container";
import { categories } from "../../../data/categoryData";
import CategoryBox from "./CategoryBox";

const Category = () => {
    return (
        <Container>
            <div className="flex flex-row pt-4 items-center justify-between overflow-x-auto w-full">
                {
                    categories.map(category => <CategoryBox
                        key={category.label}
                        label={category.label}
                        icon={category.icon}
                    ></CategoryBox>)
                }

            </div>
        </Container>
    );
};

export default Category;