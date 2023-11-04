const SectionTitle = ({subHeading, mainHeading}) => {
    return (
        <div className="md:w-3/12 text-center mx-auto mb-4">
            <p className="text-[#D99904]">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{mainHeading}</h3>
        </div>
    );
};

export default SectionTitle;