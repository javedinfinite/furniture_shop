// import React from 'react';
import Grid from '@material-ui/core/Grid';
import Founder from './Founder'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const  About = () => {

    return (
         
            <Box   flexWrap= 'wrap' style={{ marginTop:'2%', marginBottom:'5%', placeContent:'space-between space-around'}} display="flex"   container>
                 
                 <Founder 
                            title='Co-Founder'
                            name='Gopal Malo'
                            imageUrl='https://scontent.fccu10-1.fna.fbcdn.net/v/t1.6435-9/129468838_1004736990035590_7156985535425178906_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ACb1KVMa3oEAX_-4nWG&_nc_ht=scontent.fccu10-1.fna&oh=e5822f776d83d2c7d32662ac7b4ac668&oe=60CF89DA'
                            description='An interior designer by profession'
                />
                <Founder  
                title='Co-Founder'
                name='Javed Akhtar'
                imageUrl='https://media-exp1.licdn.com/dms/image/C5103AQH9FZ7t5e_Ckw/profile-displayphoto-shrink_800_800/0/1542788077159?e=1627516800&v=beta&t=d8k3Q0hwlSvFK3UecbJBcnyikc_1rCK6p-3dskjCTHM'
                description='A software engineer by profession'
                instaUrl = 'https://www.instagram.com/javedakhtar777/'
                LinkedinUrl = 'https://www.linkedin.com/in/javed-akhtar-07370613b/'
                YoutubeUrl = 'https://www.youtube.com/channel/UC4jf-dcbspJbSp6H-gBRdlw/playlists'
                />

   
            </Box>
 
    )

}


export default About;