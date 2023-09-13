import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetchImage(page, searchTerm) {

    const api = process.env.REACT_APP_UNSPLASH_API;
    const skey = process.env.REACT_APP_UNSPLASH_KEY;

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function fetch(){
        const url =
        searchTerm === null ? `photos?client_id=${skey}&page=${page}` : `search/photos?client_id=${skey}&page=${page}&query=${searchTerm}`;
        console.log(api,url);

         axios.get(
            `${api}${url}`
        ).then((res)=>{
            searchTerm=== null ?fetchRandom(res):fetchSearch(res) ;
            setIsLoading(false)
        }).catch((e)=>{
            setErrors(["Unable to fetch Images"]);
            setIsLoading(false)
        })
    }


    function fetchSearch(res) {
       
        if (page > 1) {
            setImages([...images, ...res.data.results]);
        } else {
            setImages([...res.data.results]);
        }

    }

    function fetchRandom(res) {
        setImages([...images, ...res.data]);
    }

    useEffect(() => {
        setIsLoading(true);
        fetch();
    }, [page, searchTerm]);


    return [images, setImages, errors, isLoading];
}
