import React from "react";
import "./style.css"

const TechLogos = () => {
    return (
        <div className="logoContainer">
            <img className="logo-image html-image" src={require("../../../images/tech_logos/HTML.png")} alt="HTML Logo" />
            <img className="logo-image css-image" src={require("../../../images/tech_logos/CSS.png")} alt="CSS Logo" />
            <img className="logo-image js-image" src={require("../../../images/tech_logos/js.png")} alt="JavaScript Logo" />
            <img className="logo-image python-image" src={require("../../../images/tech_logos/python.png")} alt="Python Logo" />
            <img className="logo-image react-image" src={require("../../../images/tech_logos/react.png")} alt="React Logo" />
            <img className="logo-image django-image" src={require("../../../images/tech_logos/django.png")} alt="Django Logo" />
            <img className="logo-image express-image" src={require("../../../images/tech_logos/express.png")} alt="Express Logo" />
            <img className="logo-image mongoDB-image" src={require("../../../images/tech_logos/mongoDB.png")} alt="MongoDB Logo" />
            <img className="logo-image postgresql-image" src={require("../../../images/tech_logos/postgresql.png")} alt="Postgresql Logo" />
            <img className="logo-image aws-image" src={require("../../../images/tech_logos/aws.png")} alt="AWS Logo" />
            <img className="logo-image heroku-image" src={require("../../../images/tech_logos/heroku.png")} alt="Heroku Logo" />
        </div>
    )
}

export default TechLogos