import React from "react";
import { Searchbar } from "react-native-paper";

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

interface HeaderProps {
  label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{ width: "95%", margin: 10, borderColor: "#f2f2f2", borderRadius: 20 }}
    />
  );
};

export default SearchBar;
