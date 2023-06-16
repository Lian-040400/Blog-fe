import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { Input } from '@components/ui/Input'
import { createPost } from '@store/actions/posts'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const initialValues = {
  author: null,
  title: null,
  content: null,
}

export const CreatePost = () => {
  const navigate = useNavigate()
  const createPostLoading = useSelector(store => store.posts.createPostLoading);

  const [errors, setErrors] = useState(initialValues);
  const [values, setValues] = useState(initialValues);

  const hasError = Object.values(errors).some(err => err);
  const hasValues = Object.values(values).every(val => val);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(values, () => {
      toast.success("Post has been created");
      navigate('/');
    });
  }

  const handleCancel = (e) => {
    e.preventDefault()
    const isCancel = confirm("Are you sure you want to leave?");

    if (isCancel) {
      navigate('/');
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const isEmpty = !value.trim().length;
    const error = isEmpty ? "Field can not be empty" : ""

    setValues({
      author: author.value.trim(),
      title: title.value.trim(),
      content: content.value.trim(),
    })

    setErrors({
      ...errors,
      [name]: error,
    });
  }

  return (
    <S.CreatePostContainer>
      <h1>Create Blog</h1>
      <S.Form onSubmit={handleSubmit} onChange={handleChange} >
        <Input
          autoFocus
          type="text"
          id="author"
          name="author"
          placeholder="Author name"
        />
        <S.Error>{errors.author}</S.Error>

        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
        />
        <S.Error>{errors.title}</S.Error>

        <S.TextArea
          type="text"
          id="content"
          name="content"
          placeholder='Content'
        />
        <S.Error>{errors.content}</S.Error>

        <S.ButtonWraper>
          <S.Button type="button" onClick={handleCancel}>Cancel</S.Button>
          <S.Button type="submit" primary="true" disabled={createPostLoading || hasError || !hasValues}>Create</S.Button>
        </S.ButtonWraper>
      </S.Form>
    </S.CreatePostContainer>
  )
}