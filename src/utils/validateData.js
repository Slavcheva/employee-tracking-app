export function isInvalidData(data) {
    const errors = [];
    let rowErrors = []
    let dateFromErrors = [];
    let dateToErrors = [];

    data.slice(1).forEach((row, index) => {
        if (row.length !== 4) {
            rowErrors.push(index + 1);
        } else {
            const [, , dateFrom, dateToPrev] = row;
            let dateTo=dateToPrev
            if (dateToPrev === "NULL") {
                dateTo = new Date();
            }


            if (isDateInvalid(dateFrom)) {
                dateFromErrors.push(index + 1);
            } else if (isDateInvalid(dateTo)) {
                dateToErrors.push(index + 1);
            }
        }
    })

    rowErrors.length && errors.push(`Invalid data table format on rows ${rowErrors.join(", ")}. Table should have four data columns.`)
    dateFromErrors.length && errors.push(`Invalid date format on rows ${dateFromErrors.join(", ")}. You should correct "dateFrom" data.`)
    dateToErrors.length && errors.push(`Invalid date format on rows ${dateToErrors.join(", ")}. You should correct "dateTo" data.`)

    return errors;
}

function isDateInvalid(dateStr) {
    return isNaN(new Date(dateStr));
}