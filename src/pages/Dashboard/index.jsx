import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined'

import { Container, Content } from './styles'

import imgPhoto from '../../assets/imgPhoto.jpg'
import imgLogo from '../../assets/imgLogo.png'

export function Dashboard() {
  return (
    <Container>
      <Helmet>
        <title>Tropa Digital | Dashboard</title>
      </Helmet>
      <Content>
        <div className="welcome">
          <h2>
            Olá <span>Usuário</span>
          </h2>

          <div className="box">
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
            <div className="content-boxes">
              <img src={imgPhoto} alt="Post Photo" />
              <article>
                <h3>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin...
                </h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typeseltin.
                </p>
              </article>
            </div>
          </div>
        </div>

        <section className="side-bar">
          <div className="logo">
            <NavLink to="/">
              <img src={imgLogo} alt="" />
            </NavLink>
          </div>
          <div className="sidebar-selection">
            <ul>
              <li>
                {' '}
                <SignalCellularAltIcon color="warning" fontSize="small" />{' '}
                <p>Início</p>
              </li>
              <li>
                <DataThresholdingOutlinedIcon fontSize="small" />{' '}
                <p>Contatos</p>
              </li>
              <li>
                {' '}
                <TrendingUpOutlinedIcon fontSize="small" />
                <p>Relatórios</p>
              </li>
              <li>
                <DataThresholdingOutlinedIcon fontSize="small" />{' '}
                <p>Contatos</p>
              </li>
              <li>
                <DataThresholdingOutlinedIcon fontSize="small" />{' '}
                <p>Contatos</p>
              </li>
              <li>
                <DataThresholdingOutlinedIcon fontSize="small" />{' '}
                <p>Contatos</p>
              </li>
            </ul>
          </div>
        </section>
      </Content>
    </Container>
  )
}
