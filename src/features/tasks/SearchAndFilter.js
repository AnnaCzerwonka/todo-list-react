import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Section from "../../common/Section";
import { useState, useEffect } from "react";

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.teal};
  }
`;

const SearchAndFilter = () => {
    const [query, setQuery] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setQuery(params.get("szukaj") || "");
    }, [location.search]);

    const updateQuery = (newQuery) => {
        const params = new URLSearchParams(location.search);
        if (newQuery) {
            params.set("szukaj", newQuery);
        } else {
            params.delete("szukaj");
        }
        navigate(`${location.pathname}?${params.toString()}`);
    };

    return (
        <Section
            title="Wyszukiwarka"
            body={
                <Input
                    value={query}
                    onChange={({ target }) => updateQuery(target.value)}
                    placeholder="Filtruj zadania"
                />
            }
        />
    );
};

export default SearchAndFilter;