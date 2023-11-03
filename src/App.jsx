import { createPortal } from "react-dom";
import { Header, Modal } from "./components";
import MainContent from "./components/MainContent";

const App = () => {
	return (
        <div className="container">
            <div className="min-h-screen grid grid-rows-[auto_1fr] gap-[100px] lg:gap-[72px] justify-items-center pt-8 lg:pt-12 pb-14 lg:pb-8">
                <Header />
                <MainContent />
                {createPortal(<Modal />, document.body)}
            </div>
        </div>
	);
};

export default App;
