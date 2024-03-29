import * as Yup from 'yup';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Comments from './Comments';
import PostComments from './PostComments';
// initialise
//yup 
// search default value 

function EditComment(props) {
    const {comment, value, setReply, order, setNewComment, setNestedReply, setCommentReplies, commentReplies, setEdit, setCommentContent} = props
    const formInitValues = {
      
        content: value,
    }
    
    const postForm = (data) => {
    console.log(data) 
        setCommentContent(data.content)
        setEdit(false)
    }

    
    
    const formSchema = Yup.object({
        content: Yup
        .string()
        .required()
        .min(2, "Comment must be over 2 characters long.")
        .max(5000, "Comment must be less than 5000 characters long.")

    })

    const cancel = () => {
        setEdit(false)
    }

  
    
    return (
        <div className='comment-form'>
        <Formik initialValues={formInitValues} validationSchema={formSchema} onSubmit={postForm}>
            <Form>
            <ErrorMessage name={"content"} component="div" className="text-danger " />
            <Field
                            //CSS 
                            className={"form-comment custom-form"}
                            id={"formId"}
                            // SHOULD BE WIKI  
                            name={"content"}
                             as={"textarea"}
                             // size 
                            rows={6}
                            style={{ lineHeight: 1 }}
                            // very important, send defaultValue={wiki} 
                            defaultValue={value}
                            //        const wiki = req.body.wiki
      //                                const subId = req.params.id
      //router.put("/wiki/:subcrudditname", authUser, controller.editWiki);
                         
                            
                        />
                        <br></br>
                        <button className='comment-btn m-1 ' type='submit'>{"submit"}</button>
                        <button onClick={cancel} className='comment-btn m-1 ' >{"cancel"}</button>
            </Form>
        </Formik>
        </div>



    )

  





}
export default EditComment;