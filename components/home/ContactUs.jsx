import React from 'react';
import { View, Text, Image } from 'react-native';
import {images} from "../../constants";
import ContactCard from "../utils/ContactCard";

const ContactContent = () => (
    <View>
        <ContactCard
            title='01.护法办'
            operations='可咨询居士食宿、皈依、义工报名等相关事宜'
            phone='028-23079003'
            QRCode={images.authBg}
        />
        <ContactCard
            title='02.功德处'
            operations='可咨询供僧、供斋、普佛、随喜功德等相关事宜'
            phone='17381794553'
            QRCode={images.authBg}
        />
        <ContactCard
            title='03.客堂'
            operations='可咨询僧人挂单、男众出家等事宜'
            phone='180814155677'
            QRCode={images.authBg}
        />
        <ContactCard
            title='04.新媒体部'
            mail='shuzhongjingtu@yeah.net'
        />
    </View>


);

export default ContactContent;
