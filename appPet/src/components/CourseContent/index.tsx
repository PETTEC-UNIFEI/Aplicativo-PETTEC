import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, Button, Pressable } from "react-native";
import PagerView from "react-native-pager-view";

import { styles } from "./styles";


import { CoursePage } from "../CoursePage";

import { ButtonNext } from "../ButtonNext";

export  function CourseContent({coursePages}) {
    const viewPagerRef = useRef<PagerView>(null); //reference: https://stackoverflow.com/questions/69835794/react-native-view-pager-setpage-is-not-working-on-ios

    const [currentPage, setCurrentPage] = useState(0);
    function handlePrev() {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            viewPagerRef.current?.setPage(currentPage - 1);
        }
    }

    function handleNext() {
        if (currentPage < coursePages.length - 1) {
            setCurrentPage(currentPage + 1);
            viewPagerRef.current?.setPage(currentPage + 1);
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
            >
                {coursePages.map((page) => (
                    <View key={page.id}>
                        <View style={styles.container}>
                            <CoursePage videoID={page.videoId} text={page.text} title = {page.title} />
                        </View>
                        <ButtonNext handleNext={handleNext} handlePrev={handlePrev}/>
                    </View>
                ))}
            </PagerView>
        </View>
    );
}