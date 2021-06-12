import React, {Component,useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";

import {
  Container,Col, Row,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Detail = (props) => {



		const [hits,setHits]=useState([]);

const { id } = useParams();
console.log(id);
useEffect(() => {
		const fetchData= async()=>{
			const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=2d70b76e59033e210b339f427ed88616`);
			setHits(data);
			console.log(data);

		}
		fetchData();		
	}, []);

	function addCart(){
	alert(hits.original_title);
}


		return (
		<div className="App">
			<Header/>

		<Card className="detailCard">
        <CardImg top width="100%" src={`http://image.tmdb.org/t/p/w185${hits.poster_path}`} className="cardImg" />
        <CardBody>
          <CardTitle tag="h5">{hits.original_title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><b>R.Date:</b> {hits.release_date}</CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"><b>Imdb:</b> {hits.vote_average}</CardSubtitle>
          <CardText className="detailT" >{hits.overview}</CardText>
          <Button onClick={addCart} >Add to Cart +</Button>
        </CardBody>
      </Card>
		<br/><br/><br/><br/><br/>			
		<Footer/>		
		</div>
	)
}

export default Detail