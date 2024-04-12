import LayoutHeader from "../shared/LayoutHeader";
import BenefitCard from "../shared/InfoCard";


function BenefitsLayout()
{
    return (<div>
        <div>
            <LayoutHeader headingTextWhite="Our " headingTextColored="Benefits" description="At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits 
            designed to support their personal and professional growth."/>
        </div>
        <div>
            <BenefitCard imageLink="/Icon(6).png" heading="Competitive Compensation" description="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional 
            performance and offering opportunities for financial growth."/>
            
            <BenefitCard imageLink="/Icon(6).png" heading="Competitive Compensation" description="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional 
            performance and offering opportunities for financial growth."/>

            
            <BenefitCard imageLink="/Icon(6).png" heading="Competitive Compensation" description="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional 
            performance and offering opportunities for financial growth."/>

            
            <BenefitCard imageLink="/Icon(6).png" heading="Competitive Compensation" description="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional 
            performance and offering opportunities for financial growth."/>
        </div>
    </div>);
}

export default BenefitsLayout;