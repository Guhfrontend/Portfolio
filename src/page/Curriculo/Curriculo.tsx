import './Curriculo.css'
import Work from '../../components/Work/Work'

const jobs = [
    {
        name: "Vitalis Invest",
        role: "Engenheiro de Software Junior",
        year: "2025 - Presente",
        description: "Desenvolvimento de aplicações web utilizando Typescript, Vue.js, Java, Kotlin, python, CI/CD e metodologias ágeis.",
        secondDescriptionWork: "Implementação de APIs RESTful, integração com bancos de dados SQL e NoSQL, e desenvolvimento de microsserviços."
    },
    {
        name: "JSV Telecom",
        role: "Suporte Técnico",
        year: "2024",
        description: "Observabilidade e monitoramento de sistemas com Grafana e Zabbix, suporte técnico e manutenção de infraestrutura de TI.",
        secondDescriptionWork: "Responsável por diagnosticar e resolver problemas técnicos, além de garantir a continuidade dos serviços de telecomunicações."
    }
]

export default function Curriculo() {
    return (
        <div className='box-work'>
            <h2 className="work-title">Experiência Profissional</h2>
            {jobs.map((job, index) => (
                <Work
                    key={index}
                    nameWork={job.name}
                    roleWork={job.role}
                    yearWork={job.year}
                    descriptionWork={job.description}
                    secondDescriptionWork={job.secondDescriptionWork}
                />
            ))}
        </div>
    )
}
