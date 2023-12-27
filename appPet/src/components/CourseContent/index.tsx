import React from "react";
import { useState, useRef } from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import * as Progress from 'react-native-progress';

import { styles } from "./styles";


import { CoursePage } from "../CoursePage";

import { ButtonNext } from "../ButtonNext";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../global/styles/theme";

export  function CourseContent({coursePages}) {
    const viewPagerRef = useRef<PagerView>(null); //reference: https://stackoverflow.com/questions/69835794/react-native-view-pager-setpage-is-not-working-on-ios
    
    const [currentPage, setCurrentPage] = useState(0);
    const navigation = useNavigation();

    const [progress, setProgress] = useState(1 / coursePages.length);    
    function handlePrev() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            viewPagerRef.current?.setPage(currentPage - 1);
            setProgress((prevProgress) => prevProgress - 1 / coursePages.length);
        }
    }

    function handleNext() {
        if (currentPage < coursePages.length - 1) {
            setCurrentPage(currentPage + 1);
            viewPagerRef.current?.setPage(currentPage + 1);
            setProgress((prevProgress) => prevProgress + 1 / coursePages.length);
        }
        if(currentPage == coursePages.length-1){
            navigation.navigate("FinishCourse");
        }
    }

    return (
        <View style={styles.container}>
            <PagerView
                ref={viewPagerRef}
                style={styles.viewPager}
                initialPage={0}
                onPageSelected={(e) => {
                    setCurrentPage(e.nativeEvent.position);
                }}
                scrollEnabled={false}
            >
                {coursePages.map((page) => (
                    <View key={page.id}>
                        <View style={styles.container}>
                            <CoursePage videoID={page.videoId} text={page.text} title = {page.title} />
                        </View>
                        <View style={styles.progressView}>
                            <Progress.Bar progress={progress} width={230} color={theme.colors.primary} height={18} borderRadius={15} unfilledColor={theme.colors.background4} borderWidth={0}/>
                        </View> 
                        <ButtonNext handleNext={handleNext} handlePrev={handlePrev}/>
                    </View>
                ))}
            </PagerView>
        </View>
    );
}