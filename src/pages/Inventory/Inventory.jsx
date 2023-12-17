import React, { useEffect, useMemo } from "react";
import "./inventory.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import DetailsDropDown from "./components/DetailsDropDown";
import DetailsSearch from "./components/DetailsSearch";
import DetailsCheckbox from "./components/DetailsCheckbox";

import bodyTypesData from "@/data/bodyTypes.json";
import carEmpty from "@/img/icons/moving-car_icon.svg";

import bodyType from "@/img/BodyTypes/Truck-icon.svg";
import bodyType2 from "@/img/BodyTypes/SUV-icon.svg";
import bodyType3 from "@/img/BodyTypes/Sedan-icon.svg";
import bodyType4 from "@/img/BodyTypes/Hatchback-icon.svg";
import bodyType5 from "@/img/BodyTypes/Coupe-icon.svg";
import bodyType6 from "@/img/BodyTypes/Convertiable-icon.svg";
import bodyType7 from "@/img/BodyTypes/VAN-icon.svg";

import share from "@/img/icons/Share.svg";

import carsModels from "@/data/car_brands.json";
// import carsFullData from "@/data/cars.json";
import CalculatorSlider from "@/components/Calculator/CalculatorSlider";
import DualRangeSlider from "@/components/Calculator/DualRangeSlider";
import InventorySelect from "./components/InventorySelect/InventorySelect";
import CarCard from "./components/CarCard/CarCard";
import carsData from "@/data/cars.json";
import Pagination from "@/components/Pagination/Pagination";

export default function Inventory() {
  // useEffect(() => {
  //   const headerInventory = document.querySelector(
  //     ".inventory-header .header__inventory"
  //   );

  //   if (headerInventory) {
  //     headerInventory.classList.add("caption");
  //   }
  // }, []);

  const [bodyTypes, setBodyTypes] = useState([]);
  const [carMark, setCarMark] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carName, setCarName] = useState([]);

  const [carFull, setCarFull] = useState("");

  const [transmission, setTransmission] = useState([]);

  const [kilometers, setKilometers] = useState([1000000]);
  const [kilometersTag, setKilometersTag] = useState([]);

  const [years, setYears] = useState([1980, new Date().getFullYear()]);
  const [yearsTags, setYearsTags] = useState([]);

  const [prices, setPrices] = useState([1000, 1000000]);
  const [pricesTags, setPricesTags] = useState([]);
  const [sortedBy, setSortedBy] = useState("Recommendations");

  const [changes, setChanges] = useState(false);

  const [searchedData, setSearchedData] = useState(carsData);

  const meetsFilterCriteria = (car) => {
    // Фільтр за типом кузова
    const passesBodyTypeFilter =
      bodyTypes.length === 0 || bodyTypes.includes(car.bodyType);

    // Фільтр за маркою
    const passesCarMarkFilter =
      carMark === "" || carMark.toLowerCase() === car.marke.toLowerCase();

    // Фільтр за моделлю
    const passesCarModelFilter =
      carModel === "" || carModel.toLowerCase() === car.model.toLowerCase();

    // Фільтр за трансмісією
    const passesCarTransmissionFilter =
      transmission.length === 0 || transmission.includes(car.transmission);

    // Фільтр за ціною
    const passesCarPricesFilter =
      parseFloat(car.price.replace(/\s/g, "")) >= parseFloat(prices[0]) &&
      parseFloat(car.price.replace(/\s/g, "")) <= parseFloat(prices[1]);

    // Фільтр за роком
    const passesCarYearFilter =
      parseFloat(car.year.replace(/\s/g, "")) >= parseFloat(years[0]) &&
      parseFloat(car.year.replace(/\s/g, "")) <= parseFloat(years[1]);

    // Фільтр за кілометрами
    const passesCarKilometersFilter =
      parseFloat(car.mileage.replace(/\s/g, "")) <= parseFloat(kilometers[0]);

    return (
      passesBodyTypeFilter &&
      passesCarMarkFilter &&
      passesCarModelFilter &&
      passesCarTransmissionFilter &&
      passesCarPricesFilter &&
      passesCarYearFilter &&
      passesCarKilometersFilter
    );
  };

  useEffect(() => {
    setSearchedData(carsData.filter(meetsFilterCriteria));
  }, [
    carMark,
    carModel,
    bodyTypes,
    transmission,
    prices,
    years,
    kilometers,
    carFull,
  ]);

  useEffect(() => {
    if (
      bodyTypes.length > 0 ||
      carMark != "" ||
      carModel != "" ||
      transmission.length > 0 ||
      kilometers[0] != 1000000 ||
      years[0] != 1980 ||
      years[1] != new Date().getFullYear() ||
      prices[0] != 1000 ||
      prices[1] != 1000000
    ) {
      setChanges(true);
    } else {
      setChanges(false);
    }
  }, [bodyTypes, carMark, carModel, transmission, kilometers, years, prices]);

  const bodyTypesChange = (newBodyType) => {
    if (!bodyTypes.includes(newBodyType)) {
      setBodyTypes((bodyTypes) => [...bodyTypes, newBodyType]);
    }
  };

  const bodyTypesRemove = (bodyType) => {
    if (bodyTypes.includes(bodyType)) {
      const newArray = bodyTypes.filter((item) => item !== bodyType);
      document.querySelector("#" + bodyType).checked = false;
      setBodyTypes(newArray);
    }
  };

  const transmissionChange = (newTransmission) => {
    if (!transmission.includes(newTransmission)) {
      setTransmission((transmission) => [...transmission, newTransmission]);
    }
  };

  const transmissionRemove = (TransmissionType) => {
    if (transmission.includes(TransmissionType)) {
      const newArray = transmission.filter((item) => item !== TransmissionType);
      document.querySelector("#" + TransmissionType).checked = false;
      setTransmission(newArray);
    }
  };

  const handleSetCarFull = (carFullNew) => {
    if (carFullNew === "") {
      setSearchedData(carsData.filter(meetsFilterCriteria));
      setCarFull(carFullNew);
    } else {
      setSearchedData([carsData.find((item) => item.name === carFullNew)]);
    }
  };

  const handleSetCarMark = (carMark) => {
    const lowerCaseCarMark = Object.keys(carsModels).map((item) =>
      item.toLowerCase()
    );
    if (carMark === "") {
      setCarMark("");
      setCarModel("");
      setCarName([]);
    }
    if (lowerCaseCarMark.includes(carMark.toLowerCase())) {
      const lowerCaseCarName = carName.map((item) => item.toLowerCase());
      if (!lowerCaseCarName.includes(carMark.toLowerCase())) {
        setCarMark(carMark);
        setCarModel("");
        setCarName([carMark]);
      }
    }
  };

  const handleSetCarModel = (carModel) => {
    const lowerCaseCarModel = carsModels[carMark].map((item) =>
      item.toLowerCase()
    );
    if (carModel === "") {
      setCarModel("");
      setCarName([carName[0]]);
    }
    if (lowerCaseCarModel.includes(carModel.toLowerCase())) {
      const lowerCaseCarName = carName.map((item) => item.toLowerCase());
      if (!lowerCaseCarName.includes(carModel.toLowerCase())) {
        setCarModel(carModel);
        setCarName([carName[0], carModel]);
      }
    }
  };

  const carNameRemove = (carNameToRemove) => {
    if (carName.includes(carNameToRemove)) {
      if (Object.keys(carsModels).includes(carNameToRemove)) {
        setCarMark("");
        setCarModel("");
        setCarName([]);
      } else {
        setCarModel("");
        const newArray = carName.filter((item) => item !== carNameToRemove);
        setCarName(newArray);
      }
    }
  };

  const kilometersChange = (newKilometers) => {
    setKilometers([newKilometers]);
    setKilometersTag([kilometers[0].toLocaleString() + " km or less"]);
  };

  const kilometersRemove = () => {
    setKilometers([1000000]);
    setKilometersTag([]);
    // document.querySelector("#kilometersRange").value = 0;
  };

  const yearsChange = (newYears) => {
    setYears(newYears);
    setYearsTags([newYears[0] + " - " + newYears[1]]);
  };

  const yearsRemove = () => {
    setYears([1980, new Date().getFullYear()]);
    setYearsTags([]);
  };

  const pricesChange = (newPrice) => {
    setPrices(newPrice);
    setPricesTags([
      "$" +
        newPrice[0].toLocaleString() +
        " - " +
        "$" +
        newPrice[1].toLocaleString(),
    ]);
  };

  const pricesRemove = () => {
    setPrices([1000, 1000000]);
    setPricesTags([]);
  };

  const lowerCarsModels = Object.keys(carsModels).map((item) =>
    item.toLowerCase()
  );
  const index = lowerCarsModels.indexOf(carMark.toLowerCase());
  const CarsModelByIndex = Object.keys(carsModels)[index];

  const clearAll = () => {
    pricesRemove();
    yearsRemove();
    kilometersRemove();
    setBodyTypes([]);
    setCarMark("");
    setCarModel("");
    setTransmission([]);
    setCarName([]);
    var checkboxes = document.querySelectorAll(
      '#inventory-characteristics__form input[type="checkbox"]'
    );

    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  };

  const sortedByChange = (sortedValue) => {
    setSortedBy(sortedValue);
  };

  const DataToSort = useMemo(
    () =>
      searchedData.map((item) => ({
        ...item,
        price: parseFloat(item.price.replace(/\s/g, "").replace(",", ".")) || 0,
        mileage:
          parseFloat(item.mileage.replace(/\s/g, "").replace(",", ".")) || 0,
      })),
    [searchedData]
  );

  const [sortedData, setSortedData] = useState(DataToSort);

  useEffect(() => {
    switch (sortedBy) {
      case "Recommendations":
        setSortedData(DataToSort);
        break;

      case "Lowest price":
        setSortedData(
          DataToSort.slice().sort((a, b) => a["price"] - b["price"])
        );
        break;
      case "Highest prices":
        setSortedData(
          DataToSort.slice().sort((a, b) => b["price"] - a["price"])
        );
        break;
      case "Newest inventory":
        setSortedData(DataToSort.slice().sort((a, b) => b["year"] - a["year"]));
        break;

      default:
        setSortedData(DataToSort);
    }
    // if (sortedBy !== "Recommendations") {
    //   setSortedData(
    //     DataToSort
    //       .slice()
    //       .sort((a, b) => a[sortedBy.toLowerCase()] - b[sortedBy.toLowerCase()])
    //   );
    // } else {
    //   setSortedData(DataToSort);
    // }
  }, [sortedBy, DataToSort]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const maxPages = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="inventory-header">
        <Header />
      </div>

      <section className="inventory">
        <div className="inventory__wrapper">
          <div className="inventory-characteristics">
            <div className="inventory-characteristics__top">
              <p className="inventory-characteristics__title title">
                Detailed search
              </p>

              {changes ? (
                <button
                  className="inventory-characteristics__clean .secondary-text"
                  onClick={clearAll}
                >
                  Clear filters
                </button>
              ) : (
                <></>
              )}
            </div>

            <div
              className="inventory-characteristics__form"
              id="inventory-characteristics__form"
            >
              <DetailsDropDown
                title="Marke, Model"
                tags={carName}
                removeTag={carNameRemove}
              >
                <div className="inventory-characteristics__container">
                  <p className="secondary-text inventory-characteristics__dropdownCaption">
                    Marke
                  </p>
                  <DetailsSearch
                    placeholder="Search Marke..."
                    suggestions={Object.keys(carsModels)}
                    setData={handleSetCarMark}
                    id="carMark"
                    inputValue={carMark}
                  />
                </div>

                <div className="inventory-characteristics__container">
                  <p className="secondary-text inventory-characteristics__dropdownCaption">
                    Model
                  </p>
                  <DetailsSearch
                    placeholder="Search Model..."
                    suggestions={carMark ? carsModels[CarsModelByIndex] : []}
                    setData={handleSetCarModel}
                    id="carModel"
                    inputValue={carModel}
                  />
                </div>
              </DetailsDropDown>
              <DetailsDropDown
                title="Body type"
                tags={bodyTypes}
                removeTag={bodyTypesRemove}
              >
                <div className="bodyTypesList">
                  {bodyTypesData &&
                    bodyTypesData.map((bodyType) => (
                      <DetailsCheckbox
                        key={bodyType.id}
                        icon={bodyType.icon}
                        text={bodyType.title}
                        iconWidth={bodyType.iconWidth}
                        iconHeight={bodyType.iconHeight}
                        TypesChange={bodyTypesChange}
                        TypesRemove={bodyTypesRemove}
                        checked={bodyTypes.includes(bodyType.title)}
                      />
                    ))}
                </div>
              </DetailsDropDown>
              <DetailsDropDown
                title="Transmission"
                tags={transmission}
                removeTag={transmissionRemove}
              >
                <div className="inventory-characteristics__container">
                  <DetailsCheckbox
                    text="Automatic"
                    TypesChange={transmissionChange}
                    TypesRemove={transmissionRemove}
                    checked={transmission.includes("Automatic")}
                  />

                  <DetailsCheckbox
                    text="Manual"
                    TypesChange={transmissionChange}
                    TypesRemove={transmissionRemove}
                    checked={transmission.includes("Manual")}
                  />
                </div>
              </DetailsDropDown>
              <DetailsDropDown
                title="Price"
                tags={pricesTags}
                removeTag={pricesRemove}
              >
                <DualRangeSlider
                  min="1000"
                  max="1000000"
                  fromValue={prices[0]}
                  toValue={prices[1]}
                  ariaLabel="select car price"
                  change={pricesChange}
                  type="money"
                />
              </DetailsDropDown>
              <DetailsDropDown
                title="Year"
                tags={yearsTags}
                removeTag={yearsRemove}
              >
                <DualRangeSlider
                  // min="100"
                  // max="1000"
                  min="1980"
                  max={new Date().getFullYear()}
                  fromValue={years[0]}
                  toValue={years[1]}
                  ariaLabel="select car year"
                  change={yearsChange}
                  type="years"
                />
              </DetailsDropDown>
              <DetailsDropDown
                title="Kilometers"
                tags={kilometersTag}
                removeTag={kilometersRemove}
              >
                <div className="inventory-characteristics__kilometers">
                  <CalculatorSlider
                    defaultValue={kilometers[0]}
                    text=""
                    type="kilometers"
                    min="0"
                    max="500000"
                    ariaLabel="select car mileage"
                    change={kilometersChange}
                  />
                </div>
              </DetailsDropDown>
            </div>
          </div>

          <div className="inventory-content">
            <div className="inventory-content__top">
              <div className="inventory-content__search">
                <DetailsSearch
                  placeholder="Find a dream car..."
                  suggestions={Object.values(searchedData).map(
                    (car) => car.name
                  )}
                  // suggestions={Object.values(carsData).map((car) => car.name)}
                  setData={handleSetCarFull}
                  id="carMarkTop"
                  inputValue={carFull}
                />

                <button className="share" aria-label="share cars">
                  <img
                    className="share__icon"
                    src={share}
                    alt="share icon"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="inventory-content__sorted">
                <p className="secondary-text">Sorted by</p>

                <InventorySelect
                  defaultValue="Recommendations"
                  getValue={sortedByChange}
                />
              </div>
            </div>

            <div className="inventory-content__list">
              {currentItems.length ? (
                currentItems.map((car) => (
                  <CarCard key={car.id} carData={car} />
                ))
              ) : (
                <div className="inventory-content__empty">
                  <img
                    src={carEmpty}
                    alt="moving car icon"
                    width="69"
                    height="30"
                    aria-hidden="true"
                    // className="inventory-content__empty-icon"
                  />

                  <p className="title">
                    Unfortunately there are no matches for your query.
                  </p>
                  <p className="secondary-text">
                    Try using other filter settings or request a car of your
                    choice.
                  </p>

                  <a
                    className="secondary-text inventory-content__emptyLink"
                    href="#"
                  >
                    Request a car
                  </a>
                </div>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={Math.min(
                Math.ceil(sortedData.length / itemsPerPage),
                maxPages
              )}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
