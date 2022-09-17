var simplemaps_countrymap_mapdata = {
    main_settings: {
        //General settings
        width: "responsive", //'700' or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#ffffff",

        //State defaults
        state_description: "State description",
        state_color: "#085566",
        state_hover_color: "#00B6A1",
        state_url: "",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "yes",

        //Location defaults
        location_description: "Location description",
        location_url: "",
        location_color: "#407FC1",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_size: 25,
        location_type: "square",
        location_image_source: "frog.png",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#000000",
        label_hover_color: "#d5ddec",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",

        //Zoom settings
        zoom: "yes",
        manual_zoom: "no",
        back_image: "no",
        initial_back: "no",
        initial_zoom: "-1",
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website",
        popups: "detect",
        state_image_url: "",
        state_image_position: "",
        location_image_url: ""
    },
    state_specific: {
        SAU1096: {
            name: "نجران"
        },
        SAU1097: {
            name: "الرياض"
        },
        SAU1098: {
            name: "المنطقة الشرقية"
        },
        SAU845: {
            name: "المندينة المنورة"
        },
        SAU846: {
            name: "القصيم"
        },
        SAU847: {
            name: "حائل"
        },
        SAU848: {
            name: "تبوك"
        },
        SAU861: {
            name: "الحدود الشمالية"
        },
        SAU862: {
            name: "الجوف"
        },
        SAU885: {
            name: "الباحة"
        },
        SAU886: {
            name: "عسير"
        },
        SAU887: {
            name: "جازان"
        },
        SAU888: {
            name: "مكة المكرمة"
        }
    },
    locations: {
        "0": {
            lat: "24.653837",
            lng: "46.715683",
            name: "موقعي"
        }
    },
    labels: {},
    legend: {
        entries: []
    },
    regions: {}
};