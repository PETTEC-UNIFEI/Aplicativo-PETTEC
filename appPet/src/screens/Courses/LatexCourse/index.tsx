import React from "react";
import { useState, useRef } from "react";
import { Text, Image, View, Button, Pressable } from "react-native";
import PagerView from "react-native-pager-view";

import { styles } from "./styles";

import { coursePages } from "./coursePages";

import LatexLogo from "../../../assets/latex.png";
import { CoursePage } from "../../../components/CoursePage";

export default function LatexCourse() {
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
                        <View style={styles.buttonsHeader}>
                            <Pressable
                                style={
                                    +page.id > 0
                                        ? styles.button
                                        : [styles.button, { opacity: 0 }]
                                }
                                onPress={handlePrev}
                            >
                                <Text style={styles.buttonText}>
                                    {+page.id > 0
                                        ? "< " +
                                          (+coursePages[+page.id - 1].id + 1)
                                        : ""}
                                </Text>
                            </Pressable>
                            <Pressable
                                style={
                                    +page.id < coursePages.length - 1
                                        ? styles.button
                                        : [styles.button, { opacity: 0 }]
                                }
                                onPress={handleNext}
                            >
                                <Text style={styles.buttonText}>
                                    {+page.id < coursePages.length - 1
                                        ? +coursePages[+page.id + 1].id +
                                          1 +
                                          " >"
                                        : ""}
                                </Text>
                            </Pressable>
                        </View>
                        <View style={styles.header}>
                            <Image source={LatexLogo} style={styles.image} />
                            <Text style={styles.title}>
                                {+page.id + 1 + ". " + page.title}
                            </Text>
                        </View>
                        <CoursePage videoID={page.videoId} text={page.text} />
                    </View>
                ))}
            </PagerView>
            <View style={styles.dots}>
                {coursePages.map((page) => (
                    <View
                        key={page.id}
                        style={
                            currentPage !== +page.id - 1
                                ? styles.dot
                                : [styles.dot, styles.dotActivated]
                        }
                    ></View>
                ))}
            </View>
        </View>
    );
}