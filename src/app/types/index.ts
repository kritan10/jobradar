interface JobHeroCard {
    jobCompany: string
    companyImage: JSX.Element
    jobCreated: string
    jobPost: string
    jobDescription: string
}

interface JobCirculerJobCard {
    jobCompany: string
    companyLocation: string
    companyImage: JSX.Element
    jobCreated: string
    jobPost: string
    jobDescription: string
    jobCategory: string
    jobType: string
    jobSalary: number
}

interface Testimonial{
userName: string
userImage: string
jobTitle: string
keyNote: string
}