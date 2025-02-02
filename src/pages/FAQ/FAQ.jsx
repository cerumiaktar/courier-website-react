

const FAQ = () => {
    return (
        <div className="container mx-auto mt-12 mb-12 space-y-6">
            <div className="collapse collapse-plus bg-base-100 border border-[#9BDAEA]">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold text-xl">What types of packages can I send?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-[#9BDAEA]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">How long does delivery take?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-[#9BDAEA]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">Do you offer business courier services?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-[#9BDAEA]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">What if my package is damaged during delivery?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-[#9BDAEA]">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold text-xl">How can I schedule a pickup?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
        </div>
    );
};

export default FAQ;