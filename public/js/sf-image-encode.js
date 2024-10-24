export const toDataURL = async (url) => {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const image = new Image();
                image.src = reader.result;
                image.onload = () => {
                    resolve({
                        "src": reader.result,
                        "width": image.width,
                        "height": image.height
                    });
                };
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.error('Error converting image to data URL:', error);
        throw error;
    }
};
