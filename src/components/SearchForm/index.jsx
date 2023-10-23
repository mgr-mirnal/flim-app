import { useState,useEffect } from "react";
import {ShowCard} from "../"

export default function SearchForm() {
    const [inputValue, setInputValue] = useState("");
    const [searchString, setSearchString] = useState("Arrow")
    const [showData, setshowData] = useState([])

    function handleInput(e){
        const newInput = e.target.value;
        setInputValue(newInput);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue("");
    }
    useEffect(() => {
        async function searchAPI(){
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
            const data = await response.json()
            const showData = data.map(s => s.show)
            setshowData(showData)
        }
        searchAPI()
    },[searchString])
    
return (
    <>
        <form onSubmit={handleSubmit}>
        <input type="text"  required onChange={handleInput} value={inputValue}/>
        <input type="submit" value="Search" />
        </form>
        {showData.map(s => s.image? <ShowCard show={s} key={s.id} /> : "")}
    </>
  );
}