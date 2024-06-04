const Title = ({ text }: any) => {
  console.log('Title re-rendered')

  return (
    <div>
      Title: {text}
    </div>
  )
}

export default Title