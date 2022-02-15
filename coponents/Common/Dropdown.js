import React, { useState, useEffect } from "react";

function Dropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [itemList, setItemList] = useState();
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [question1, setQuestion1] = useState([]);

  const itemArray = [
    {
      roles: "Team",
      value: "team",
    },
  ];

  useEffect(() => {
    setItemList(itemArray);
  }, []);

  return (
    <div className="custom-dropdown">
      <div
        className={`custom-dropdown-selection ${
          isDropdownVisible ? "visible" : ""
        }`}
        onClick={(e) => {
          setIsDropdownVisible(!isDropdownVisible);
        }}
      >
        {selectedItemIndex == 0 ? itemList[selectedItemIndex].roles : "MySelf"}
      </div>
      {isDropdownVisible ? (
        <div className="item-holder">
          {itemList.map((item, index) => {
            return (
              <div
                className="dropdown-item"
                key={item.value}
                onClick={(e) => {
                  setQuestion1(item.value);
                  setSelectedItemIndex(index);
                  setIsDropdownVisible(false);
                }}
              >
                {item.roles}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Dropdown;
