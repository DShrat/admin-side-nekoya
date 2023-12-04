import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import './form.css';
import logo from './assets/logo.jpg'


const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null,
    stock: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('image', product.image);
    formData.append('stock', product.stock);

    try {
      // Ganti URL_API dengan URL API yang sesuai
      const response = await axios.post('URL_API/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Lakukan sesuatu setelah pengiriman data berhasil
      console.log('Data berhasil disimpan', response.data);

      // Reset formulir setelah pengiriman berhasil
      setProduct({
        name: '',
        price: '',
        description: '',
        image: null,
        stock: '',
      });
    } catch (error) {
      console.error('Gagal menyimpan data', error);
    }
  };

  return (
    <Container className='bungkusForm'>
        <Row>
            <Col>
                <form onSubmit={handleSubmit}>
                    <div className='formBox'>
                        <Row className='titleForm'>
                            <Col style={{marginRight: '10px'}}>
                                ADMIN SIDE NEKOYA
                            </Col>
                            <Col>
                                <img style={{height:'100px'}} src={logo} alt="Logo" />
                            </Col>
                        </Row>
                        <Row className='isiForm'>
                           <label>
                                <Col className='namaRow'>
                                    Nama Produk:
                                </Col>
                                <Col>
                                    <input
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleChange}
                                    style={{width:'900px', height:'20px', fontSize:'15pt'}}
                                    />
                                </Col>
                            </label> 
                        </Row>
                        <br />
                        <Row className='isiForm'>
                            <label>
                                <Col className='namaRow'>
                                    Harga:
                                </Col>
                                <Col>
                                    <input
                                    type="text"
                                    name="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    style={{width:'900px', height:'20px', fontSize:'15pt'}}
                                    />
                                </Col>       
                            </label>
                        </Row>
                        <br />
                        <Row className='isiForm'>
                            <label>
                                <Col className='namaRow'>
                                    Deskripsi:
                                </Col>
                                <Col>
                                    <textarea
                                    name="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    style={{width:'900px', height:'200px', fontSize:'15pt'}}
                                    />
                                </Col>
                            </label>
                        </Row>
                        <br />
                        <Row className='isiForm'>
                            <label>
                                <Col className='namaRow'>
                                    Stock:
                                </Col>
                                <Col>
                                    <textarea
                                    name="stock"
                                    value={product.stock}
                                    onChange={handleChange}
                                    style={{width:'900px', height:'20px', fontSize:'15pt'}}
                                    />
                                </Col>
                            </label>
                        </Row>
                        <br />
                        <Row className='isiForm'>
                            <label>
                                <Col className='namaRow'>
                                    Gambar:
                                </Col>
                                <Col>
                                    <input 
                                    type="file" 
                                    name="image" 
                                    onChange={handleChange} 
                                    style={{color: 'white'}}/>
                                </Col>
                            </label>  
                        </Row>
                        <br />
                        <Row>
                            <button className='tombol' type="submit">Simpan</button>
                        </Row>
                    </div>
                </form>
            </Col>
        </Row>
    </Container>
  );
};

export default ProductForm;