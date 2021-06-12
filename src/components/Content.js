import React, {Component,useState,useEffect} from "react";
import '../App.css';
import axios from "axios"
import {Container,Col, Row} from "reactstrap";
import {Link, Redirect} from "react-router-dom";
import Detail from "./Detail"
import Footer from "./Footer";
import Header from "./Header";

const Content = () => {
	const [hits,setHits]=useState([]);
	
	const [name,setName]=useState([]);
	const [img,setImg]=useState([]);
	const [date,setDate]=useState([]);
	const [vote,setVote]=useState([]);

	useEffect(() => {
		const fetchData= async()=>{
			const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2d70b76e59033e210b339f427ed88616&query=movies`);

			setName(data.results[0].original_title);
			setImg(data.results[0].poster_path);
			setDate(data.results[0].release_date);
			setVote(data.results[0].vote_average);
			setHits(data.results);

		}
		fetchData();		
	}, []);

	return (

		<div className="App container ">
	
			<div className="cJumbotron" >
				<h3 className="cJumbotronText" >..........................</h3>
			</div>	
		
			<Row>
				<Col xs="12">
					<h3 className="movieText" >Popular Movies</h3>	
				</Col>
			</Row>
					<div className="grid-container"  >		
						{hits.map(hit=>(
							<Link to={{pathname: `/detail/${hit.id}`}} className="link">
									<div key={hit.objectID} className="movieB">		
											<img src={`http://image.tmdb.org/t/p/w185${hit.poster_path}`} alt="" class="moviePic"/> 
											<div className="belowSide">
											<br/>
												<p><b>{hit.original_title}</b></p>
												<p>{hit.release_date}</p>
												<p>{hit.vote_average}</p>	
											</div>
										<br/>
									</div>
							</Link>
									
						))}
					</div>
			<br/><br/>			
		</div>
	)	
}

export default Content