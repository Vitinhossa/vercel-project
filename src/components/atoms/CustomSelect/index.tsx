/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  SelectContainer,
  SelectElement,
  CustomSelectElement,
  OptionsContainer,
  Value,
  Option,
  ClickToClose,
  Label,
} from './style';

interface ICustomSelect {
  height?: string;
  background?: string;
  hasBorder?: boolean;
  placeholderText?: string;
  labelText?: string;
  labelColor?: string;
  selectOption: (e: any) => any;
}

interface IListItems {
  id: number;
  name: any;
  isSelected: boolean;
}
export default function CustomSelect({
  height,
  background,
  hasBorder = true,
  labelText,
  labelColor,
  placeholderText = `Selecione`,
  selectOption,
}: ICustomSelect) {
  const [optionIsOpen, setOptionIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: -1,
    name: `${placeholderText}`,
  });
  const [listItems, setListItems] = useState<IListItems[]>([]);

  const selectItems = [
    {
      id: 0,
      name: `AC`,
      isSelected: false,
    },
    {
      id: 1,
      name: `AL`,
      isSelected: false,
    },
    {
      id: 2,
      name: `AP`,
      isSelected: false,
    },
    {
      id: 3,
      name: `AM`,
      isSelected: false,
    },
    {
      id: 4,
      name: `BA`,
      isSelected: false,
    },
    {
      id: 5,
      name: `CE`,
      isSelected: false,
    },
    {
      id: 6,
      name: `ES`,
      isSelected: false,
    },
    {
      id: 7,
      name: `GO`,
      isSelected: false,
    },
    {
      id: 8,
      name: `MA`,
      isSelected: false,
    },
    {
      id: 9,
      name: `MT`,
      isSelected: false,
    },
    {
      id: 10,
      name: `MS`,
      isSelected: false,
    },
    {
      id: 11,
      name: `MG`,
      isSelected: false,
    },
    {
      id: 12,
      name: `PA`,
      isSelected: false,
    },
    {
      id: 13,
      name: `PB`,
      isSelected: false,
    },
    {
      id: 14,
      name: `PR`,
      isSelected: false,
    },
    {
      id: 15,
      name: `PE`,
      isSelected: false,
    },
    {
      id: 16,
      name: `PI`,
      isSelected: false,
    },
    {
      id: 17,
      name: `RJ`,
      isSelected: false,
    },
    {
      id: 18,
      name: `RN`,
      isSelected: false,
    },
    {
      id: 19,
      name: `RS`,
      isSelected: false,
    },
    {
      id: 20,
      name: `RO`,
      isSelected: false,
    },
    {
      id: 21,
      name: `RR`,
      isSelected: false,
    },
    {
      id: 22,
      name: `SC`,
      isSelected: false,
    },
    {
      id: 23,
      name: `SP`,
      isSelected: false,
    },
    {
      id: 24,
      name: `SE`,
      isSelected: false,
    },
    {
      id: 25,
      name: `TO`,
      isSelected: false,
    },
    {
      id: 26,
      name: `DF`,
      isSelected: false,
    },
  ];

  const handleSelectedItem = (item: any) => {
    setSelectedOption(item);
    setOptionIsOpen(false);

    const newSelectList: any = [];
    selectItems.forEach((sItem) => {
      const newItem = sItem;
      if (item.id === sItem.id) {
        newItem.isSelected = !newItem.isSelected;
      } else {
        newItem.isSelected = false;
      }
      newSelectList.push(newItem);
    });

    setListItems(newSelectList);
  };

  useEffect(() => {
    setListItems(selectItems);
  }, []);

  useEffect(() => {
    selectOption(selectedOption);
  }, [selectedOption]);

  function buildSelectItems() {
    return listItems.map((item) => (
      <Option
        key={item.id}
        onClick={() => handleSelectedItem(item)}
        isSelected={item?.isSelected}
      >
        {item.name}
      </Option>
    ));
  }

  return (
    <SelectContainer
      height={height}
      background={background}
      hasBorder={hasBorder}
      isSelected={selectedOption.id !== -1}
    >
      {optionIsOpen && <ClickToClose onClick={() => setOptionIsOpen(false)} />}
      {labelText && <Label fontColor={labelColor}> {labelText} </Label>}
      <SelectElement />
      <CustomSelectElement
        isDefault={selectedOption.id === -1}
        background={background}
        onClick={() => setOptionIsOpen(!optionIsOpen)}
      >
        <Value>{selectedOption.name}</Value>
        <i
          className="icon-chevron-right"
          style={{
            transform: `${optionIsOpen ? `rotate(270deg)` : `rotate(90deg)`}`,
            color: `#ADB5BD`,
            transition: `all 0.3s`,
            transformOrigin: `center`,
            fontSize: `12px`,
          }}
        />
      </CustomSelectElement>
      <OptionsContainer isVisible={optionIsOpen}>
        {buildSelectItems()}
      </OptionsContainer>
    </SelectContainer>
  );
}
