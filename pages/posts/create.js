import dynamic from 'next/dynamic'
import DefaultHead from '../../components/misc/default-head'

const QuillReact = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading...</p> }
)

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
}

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

const CreatePost = () => {
  return (
    <>
      <DefaultHead>
        <link href="//cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet"/>
      </DefaultHead>
      <QuillReact
        modules={modules}
        formats={formats}
        theme='snow'
      />
    </>
  )
}

export default CreatePost