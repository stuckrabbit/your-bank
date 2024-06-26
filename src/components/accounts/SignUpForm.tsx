import FormButton from "./FormButton";
import FormExternalServiceButton from "./FormExternalServiceButton";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import FormORSeparator from "./FormORSeparator";
import styles from "./SignUpForm.module.css";

function SignUpForm()
{
    return (<div className={styles.container}>
        <div className={styles.absImageContainer}>
            <img src="/images/home/design.svg"/>
        </div>
        <div className={styles.contentContainer}>
        <FormHeader heading="Sign Up" description="Join our community today! Create an account 
        to unlock exclusive features and personalized experiences."/>
        <form className={styles.form}>
            <div className={styles.inputContainer}>
                <div className={styles.inputFieldContainer}>
                    <FormInput inputType="text" placeholder="Enter First Name"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <FormInput inputType="text" placeholder="Enter Last Name"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <FormInput inputType="email" placeholder="Enter your Email"/>
                </div>
                <div className={styles.inputFieldContainer}>
                    <FormInput inputType="password" placeholder="Enter your Password"/>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonParent}>
                    <FormButton isGreen={true} buttonText="Sign Up"/>
                </div>
                <div className={styles.buttonParent}>
                    <FormButton buttonText="Login"/>
                </div>
            </div>
            <div className={styles.line}>
                <FormORSeparator/>
            </div>
            <div className={styles.externalLinkSection}>
                <FormExternalServiceButton imageLink="/images/common/google.svg"/>
                <FormExternalServiceButton imageLink="/images/common/facebook.svg"/>
                <FormExternalServiceButton imageLink="/images/common/apple.svg"/>
            </div>
        </form>
        </div>
    </div>);
}

export default SignUpForm;