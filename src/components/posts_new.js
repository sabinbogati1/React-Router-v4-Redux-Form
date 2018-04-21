import React, {Component} from "react";
import {Field, reduxForm, FieldArray} from "redux-form";

class PostsNew extends Component{

    renderField(field){
            return (

                <div className="form-group">
                        <label>{field.label} </label>
                        <input className="form-control" type="text" {...field.input}  />
                {field.meta.error}
                
                        </div>
            )
    }


  
    render(){
        return(
            <form>
                    <Field label="TITLE" name="title" component={this.renderField} />
                    <Field  label="CATEGORIES" name="categories" component={this.renderField} />
                    <Field  label="POST CONTENT" name="content" component={this.renderField} />
            </form>
        )
    }


} 

function validate(values){
    const errors={};

    if(values.title.length<3){
        errors.title ="Title must be at least 3 character ";
    }

        if(!values.title ){
            errors.title ="Enter a title!";
        }

        if(!values.categories){
            errors.categories ="Enter some categories ";
        }

        if(!values.content){
            errors.content = "Enter some content please ";
        }

        return errors;

}

export default reduxForm({
    validate,
    form:"PostsNewForm"
})(PostsNew);