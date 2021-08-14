function superbowlWin (record){
    const foundRecord = record.find(record => record.result === 'W');
    if (foundRecord) {
        return foundRecord.year;
    }
}

superbowlWin(record)

















