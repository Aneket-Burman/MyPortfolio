const VerticalLine = () => {
    return (
        <div className="absolute left-10 mt-20 top-0 h-[calc(100%-5rem)] w-1 bg-blue-500">
            {/* Start Label */}
            <div className="absolute ml-4 text-2xl font-bold text-blue-500 top-4 left-full whitespace-nowrap">
                &lt;Start /&gt;
            </div>
            
            {/* End Label */}
            <div className="absolute bottom-0 ml-4 text-2xl font-bold text-blue-500 left-full whitespace-nowrap">
                &lt;End /&gt;
            </div>
        </div>
    );
};

export default VerticalLine;
