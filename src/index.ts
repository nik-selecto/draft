async function main() {
    console.log('hi');
};












(async () => {
    try {
        await main();
    } catch (error) {
        console.error('=== ERROR ===');
        console.error(error);
        console.error('=== ERROR ===');
    } finally {
        process.exit(0);
    }
})();
