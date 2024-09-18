function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelector').value;
    const languageData = getLanguageData(selectedLanguage);

    // Update content based on the selected language
    document.getElementById('headerTitle').innerHTML = languageData.headerTitle;
    document.getElementById('formTitle').innerHTML = languageData.formTitle;
    document.getElementById('preambleText').innerHTML = languageData.preambleText;
    document.getElementById('fundamentalRightsText').innerHTML = languageData.fundamentalRightsText;
    document.getElementById('fundamentalDutiesText').innerHTML = languageData.fundamentalDutiesText;
    document.getElementById('directivePrinciplesText').innerHTML = languageData.directivePrinciplesText;
}

function getLanguageData(language) {
    const translations = {
        'en': {
            headerTitle: 'Child Section',
            formTitle: 'Select your Language preference',
            preambleText: 'Preamble',
            fundamentalRightsText: 'Fundamental Right',
            fundamentalDutiesText: 'Fundamental Duties',
            directivePrinciplesText: 'Directive Principles of State Policy',
        },
        'hi': {
            headerTitle: 'बाल अनुभाग',
            formTitle: 'अपनी भाषा की प्राथमिकता चुनें',
            preambleText: 'प्रस्तावना',
            fundamentalRightsText: 'मौलिक अधिकार',
            fundamentalDutiesText: 'मौलिक कर्तव्य',
            directivePrinciplesText: 'राज्य नीति के निदेशक तत्व',
        },
        // Add other language translations
        'bn': {
            headerTitle: 'শিশু বিভাগ',
            formTitle: 'আপনার ভাষার পছন্দ নির্বাচন করুন',
            preambleText: 'প্রস্তাবনা',
            fundamentalRightsText: 'মৌলিক অধিকার',
            fundamentalDutiesText: 'মৌলিক দায়িত্ব',
            directivePrinciplesText: 'রাষ্ট্রনীতির নির্দেশক নীতি',
        },
        // Assamese (অসমীয়া)
        'as': {
            headerTitle: 'শিশু বিভাগ',
            formTitle: 'আপোনাৰ ভাষাৰ পছন্দ বাচনি কৰক',
            preambleText: 'প্ৰস্তাৱনা',
            fundamentalRightsText: 'মৌলিক অধিকাৰ',
            fundamentalDutiesText: 'মৌলিক কৰ্তব্য',
            directivePrinciplesText: 'ৰাজ্য নীতিসমূহৰ নিৰ্দেশক সিদ্‌ধান্ত',
        },

        // Dogri (डोगरी)
        'doi': {
            headerTitle: 'बच्‍चा खंड',
            formTitle: 'अपनी भाषा पसंद चुनें',
            preambleText: 'प्रस्‍तावना',
            fundamentalRightsText: 'मौलिक अधिकार',
            fundamentalDutiesText: 'मौलिक कर्तव्‍य',
            directivePrinciplesText: 'राज्‍य नीति के निर्देशक सिद्‍धांत',
        },

        // Bodo (बर'मा)
        'brx': {
            headerTitle: 'बिरिन फांय',
            formTitle: 'निरेनाय बैखो फादिननोनि हाबार',
            preambleText: 'सिथै होर',
            fundamentalRightsText: 'थोंखायबोल धिकार',
            fundamentalDutiesText: 'थोंखायबोल बिजाब',
            directivePrinciplesText: 'राज्य होर नोनि नायबोल जायोन',
        },

        // You can continue adding other languages as needed
        };

    return translations[language] || translations['en'];
}
