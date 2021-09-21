import { SourcesAndUses } from "../common/LoanComponents/SourcesAndUses/SourcesAndUses"
import { LoanInformation } from "../common/LoanComponents/LoanInformation/LoanInformation"

export default function LoanComponent() {
    return (
        <div>
            <SourcesAndUses />
            <LoanInformation />
            <SourcesAndUses />
            <LoanInformation />
            <SourcesAndUses />
            <LoanInformation />
        </div>
    )
}