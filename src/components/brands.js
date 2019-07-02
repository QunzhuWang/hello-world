import React from "react"

class Brands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImageIndex: 0,
      number: 6,
      images: [
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553840577/brands/ford.png",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553840576/brands/general_motor.png",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553844896/brands/chevrolet.jpg",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553840576/brands/southwire.jpg",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553841098/brands/waldmann.jpg",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1553841736/brands/Cadillac.png",
        "https://res.cloudinary.com/dscglobal/image/upload/c_scale,h_100/v1554166082/brands/MI-Integration.jpg",
      ],
    }
    this.nextSlide = this.nextSlide.bind(this)
    this.updateDimension = this.updateDimension.bind(this)
  }

  nextSlide() {
    //find the index of the last image in the array
    const lastIndex = this.state.images.length - 1

    //check if we need to start over from the first index
    const resetIndex = this.state.currentImageIndex === lastIndex
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1

    //assign the logical index to current ImageIndex that will use in render method
    this.setState({
      currentImageIndex: index,
    })

  }

  updateDimension() {
    if (window.innerWidth < "600") {
      this.setState({
        number: 2,
      })
    } else if (window.innerWidth < "800") {
      this.setState({
        number: 3,
      })
    } else if(window.innerWidth < "1100"){
      this.setState({
        number: 5,
      })
    } else{
      this.setState({
        number: 6,
      })
    }
  }

  componentDidMount() {
    this.showBrands = setInterval(() => this.nextSlide(), 2000)
    window.addEventListener("resize", this.updateDimension)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension)
    clearInterval(this.showBrands)
  }

  render() {
    //get current image index
    const index = this.state.currentImageIndex
    const number = this.state.number
    //create a new array with 6 pics from the source images
    let showPics = this.state.images.slice(index, index + number)
    //check the length of the new array (it's less than 6 when index is near the end of the array)
    if (showPics.length < number) {
      //if the first five pics is lower than 6 images
      //appending missing images from the beginning of the original array
      showPics = showPics.concat(
        this.state.images.slice(0, number - showPics.length)
      )
    }

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 0 2rem 0",
        }}
      >
        {showPics.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    )
  }
}

export default Brands
