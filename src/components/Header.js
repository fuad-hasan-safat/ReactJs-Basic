export default function Header({
    heading
  
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
            <i className="fa-solid fa-beat-fade">
            <img 
                    alt=""
                    className="h-20 w-20"
                    src={require('../assets/images/FUADr.png')}/>

            </i>
                
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 font-serif text-red-600">
                {heading}
            </h2>
        
        </div>
    )
}