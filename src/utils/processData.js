const projectsObj = {};
const employees = [];

export function processData(data) {
    const arr= data.slice(1);

    const inputData = arr.map(row => {
        const [employee, project, d1, d2] = row;

        const dateFrom = new Date(d1)
        const dateTo = (d2 === "NULL") ? new Date() : new Date(d2)

        const period = getDates(dateFrom, dateTo)
            .map(e => new Date(e).toLocaleDateString())

        if (!employees.includes(employee)) {
            employees.push(employee);
        }

        if (!projectsObj.hasOwnProperty(project)) {
            projectsObj[project] = {};
        }

        period.forEach(date => {
            if (!projectsObj[project].hasOwnProperty(date)) {
                projectsObj[project][date] = [];
            }
            if (!projectsObj[project][date].includes(employee)) {
                projectsObj[project][date].push(employee)
            }
        })
        return [employee, project, dateFrom.toLocaleDateString(), dateTo.toLocaleDateString()]
    })

    const allEmployeesPairs = [].concat(...employees.map(
        (employee1, index) => employees
            .slice(index + 1)
            .map(employee2 => [employee1, employee2]))
    );

    const commonPrs = Object.entries(projectsObj).map(p => {
        const pairs = Object.values(p[1]).filter(el => [...el].length > 1);

        return {
            project: p[0],
            pairs: pairs
        }

    }).filter(e => (e.pairs.length))


    const partners = [];
    allEmployeesPairs.forEach(pair => {
        const [employee1, employee2] = pair;
        const emObj = {
            pair: pair,
            total: 0,
            projectsObj: []
        }

        commonPrs.forEach(p => {
            const obj = {
                project: p.project,
                days: 0
            }

            p.pairs.forEach(e => {
                if (e.includes(employee1) && e.includes(employee2)) {
                    obj.days++;
                    emObj.total++;
                }
            })

            obj.days > 0 && emObj.projectsObj.push(obj)
        })
        emObj.total > 0 && partners.push(emObj)
    })

    const projects = Object.entries(projectsObj).map((e) => {
        const [projID, projData] = e
        const calendar = []
        for (const key in projData) {
            const obj = {
                "date": key,
                "employees": projData[key]
            }
            calendar.push(obj)
        }

        return {
            "projID": projID,
            "projCalendar": calendar
        }


    })

    const maxDays = Math.max(...partners.map(obj => obj.total));
    const topPartners = partners.filter(obj => obj.total === maxDays)

    partners.sort((a,b)=>b.total-a.total);

    return [projects, partners, topPartners, inputData]
}


function getDates(startDate, stopDate) {
    const dateArray = [];
    let currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        const result = new Date(currentDate);
        currentDate = result.setDate(result.getDate() + 1);
    }
    return dateArray;
}



