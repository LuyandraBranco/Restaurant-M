import {
    Container,
    Cards,
    Card1,
    Card2,
    Card3,
    Title,
    Description,
    Numbers,
    Number,
    Input,
    Search,
    Button,
    FooterContact,
    Text,
    Span,
    RedesSociais,
    Rede,
    Linke
 }
 from './styles';
 import {FaArrowRight, FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithubSquare} from "react-icons/fa";
 
 export const Footer= () => {
 
   return (

     <Container>

        <Cards>

            <Card1>
                <Title>About Us</Title>
                <Description>Lorem ipsum dolor sit amet,
                             consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt 
                             ut labore dolore magna aliqua.
                </Description>
            </Card1>

            <Card2>
                <Title>Contact Us</Title>
                <Description>Lorem ipsum dolor sit amet,
                             consectetur adipisicing elit,
                             sed do eiusmod tempor incididunt
                             ut labore dolore magna aliqua. 
                </Description>

                <Numbers>
                    <Number>012-6532-568-9746 </Number>
                    <Number>012-6532-569-9748 </Number>
                </Numbers>

            </Card2>

            <Card3>
                <Title>Newsletter</Title>
                <Description>You can trust us. we only send offers,
                             not a single spam.
                </Description>
                
                <Search>
                    <Input type="text" placeholder="Email address"/>
                    <Button><FaArrowRight/></Button>
                </Search>
            </Card3>

        </Cards>

        <FooterContact>
            
            <Text>Copyright ©2022 All rights reserved | Desenvolvido por <Span>LuyandraBranco</Span></Text>

            <RedesSociais>

                <Rede><Linke to="https://www.facebook.com/luyandrafernandasoka.branco"><FaFacebook/></Linke></Rede>
                <Rede><Linke to="https://twitter.com/Luyandra_Branco"><FaTwitter/></Linke></Rede>
                <Rede><Linke to="https://www.instagram.com/luyandra_branco/"><FaInstagram/></Linke></Rede>
                <Rede><Linke to="www.linkedin.com/in/luyandra-branco-494973206"><FaLinkedin/></Linke></Rede>
                <Rede><Linke to="https://github.com/LuyandraBranco"><FaGithubSquare/></Linke></Rede>
                
            </RedesSociais>

        </FooterContact>

     </Container>
   )
 };