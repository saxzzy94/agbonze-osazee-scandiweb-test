import { GalleryItem } from "../../../../styles/products/Products.styled";

function creatGallery() {
	const { gallery } = this.props;
	const gl = gallery.length;
	if (gl === 1) {
		return "";
	} else {
		return (
			gallery &&
			gallery.map((item, index) => (
				<GalleryItem key={item} bigImage={this.state.bigImage} index={index}>
					<img onClick={() => this.changeMainImage(index)} src={item} alt="#" />
				</GalleryItem>
			))
		);
	}
}

export default creatGallery;
