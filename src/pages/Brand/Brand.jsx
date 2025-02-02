

const Brand = ({brand}) => {
    const {id, img, title} = brand;
    return (
        <div className="bg-white shadow-lg border border-[#00000040] py-6 rounded-lg">
            <img className="h-16 mx-auto" src={img} alt="" />
        </div>
    );
};

export default Brand;