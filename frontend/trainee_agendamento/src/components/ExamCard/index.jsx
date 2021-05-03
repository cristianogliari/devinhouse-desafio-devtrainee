import ExamStyle from "./style";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";

function ExamCard(props) {
  const { titulo, nome, id } = props;

  return (
    <ExamStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <AiFillMedicineBox className="card-header-icon"/>
            <h3>{titulo}</h3>
          </div>

          <div className="schedule-actions">
            <div className="schedule-action">
              <MdEdit className="schedule-action-edit"/>
            </div>
            <div className="schedule-action">
              <MdDelete className="schedule-action-delete"/>
            </div>
          </div>
        </div>

        <div className="card-content">
          <div className="card-content-schedule-client">
            <div className="card-content-schedule-client-name">
              <p className="card-content-schedule-cliente-name-title">Código: </p>
              <p className="card-content-schedule-cliente-name-resume">{id}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-client-info">
              <p className="card-content-schedule-client-info-title">Nome: </p>
              <p className="card-content-schedule-client-info-name">{nome}</p>
            </div>
          </div>
        </div>
      </div>
    </ExamStyle>
  )
};

export default ExamCard;