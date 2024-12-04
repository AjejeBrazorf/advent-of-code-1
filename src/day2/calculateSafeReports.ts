const isSafeReport = (report: number[]) => {
    if(report.length === 0) {
        return false
    }
    let isSafeDifference = true
    let isIncreasing = true
    let isDecreasing = true
    let isConstantlyDecreasingOrIncreasing, isSafe = true
    for(let i = 1; i < report.length && isSafe; i++) {
        const diff = report[i] - report[i-1]
        const diffAbs = Math.abs(diff)
        isIncreasing = isIncreasing && diff > 0
        isDecreasing = isDecreasing && diff < 0
        isConstantlyDecreasingOrIncreasing = ((!isIncreasing && isDecreasing) ||
            (isIncreasing && !isDecreasing))
        isSafeDifference = isSafeDifference && diffAbs <= 3 && diffAbs > 0
        isSafe = isSafeDifference && isConstantlyDecreasingOrIncreasing
    }
    return isSafe
}

export const  calculateSafeReports = (reports: number[][], options?:{tolerance: boolean}): number => {
    return reports.filter(report => {
        let isSafe = isSafeReport(report)
        if(options?.tolerance && !isSafe) {
            for(let i = 0; i < report.length && !isSafe ; i++) {
                const newReport = [...report]
                newReport.splice(i, 1)
                isSafe = isSafeReport(newReport)
            }
        }
        return isSafe
    }).length
}
