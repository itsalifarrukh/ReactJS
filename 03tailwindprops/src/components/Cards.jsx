import PropTypes from "prop-types";

function Cards({ username, btnText = "Visit me" }) {
  return (
    <div>
      <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              About {username}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Macbook
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Apple
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Laptop
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                {btnText}
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://scontent.fkhi24-1.fna.fbcdn.net/v/t39.30808-6/436352732_17988487415641727_3382562838330666920_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=SFlAUryapiQQ7kNvgFPLB2W&_nc_ht=scontent.fkhi24-1.fna&oh=00_AYC9D6G2cPf4DVdix6nugYcPg4iasY-Mh7_51p8TeChIYg&oe=6650FDCA"
                alt="itsfarrukhali"
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">
                  Farrukh Ali
                </span>
                <span className="text-[8px] font-medium text-gray-500">
                  @itsfarrukhali
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Cards.propTypes = {
  username: PropTypes.string.isRequired,
  btnText: PropTypes.string,
};
export default Cards;
